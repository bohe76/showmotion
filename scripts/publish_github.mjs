// 공개 저장소(GitHub)에 올릴 스냅샷 커밋을 public 브랜치에 쌓는다 — node scripts/publish_github.mjs "<메시지>"
// main 이력에는 내부 문서가 들어 있으므로 main 은 절대 push 하지 않는다. main 의 현재 트리에서 EXCLUDE 를 뺀 트리로
// 새 커밋을 만들고(부모 = 이전 public 커밋), push 는 `git push origin public:main` 으로 따로 한다
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

// 공개하지 않는 경로 — 내부 문서와, 내부 문서를 읽는 도구
const EXCLUDE = ['docs', 'AGENTS.md', 'CLAUDE.md', 'scripts/build_inventory.mjs', 'scripts/build_mg_inventory.mjs'];
// 공개 커밋에는 개인 메일 대신 GitHub noreply 주소를 쓴다
const AUTHOR = { name: 'bohe76', email: '15307692+bohe76@users.noreply.github.com' };

const message = process.argv[2];
if (!message) throw new Error('커밋 메시지를 인자로 넘긴다');

const tmp = mkdtempSync(path.join(tmpdir(), 'publish-'));
const env = {
  ...process.env,
  GIT_INDEX_FILE: path.join(tmp, 'index'),
  GIT_AUTHOR_NAME: AUTHOR.name,
  GIT_AUTHOR_EMAIL: AUTHOR.email,
  GIT_COMMITTER_NAME: AUTHOR.name,
  GIT_COMMITTER_EMAIL: AUTHOR.email,
};
const git = (...args) => execFileSync('git', args, { env, encoding: 'utf8' }).trim();

try {
  git('read-tree', 'main');
  git('rm', '--cached', '-r', '-q', '--ignore-unmatch', '--', ...EXCLUDE);
  const tree = git('write-tree');

  let parent = '';
  try {
    parent = git('rev-parse', '--verify', '-q', 'refs/heads/public');
  } catch {
    // 첫 공개 — 부모 없는 커밋
  }
  if (parent && git('rev-parse', `${parent}^{tree}`) === tree) {
    console.log('바뀐 공개 파일 없음 — 커밋하지 않는다');
  } else {
    const commit = git('commit-tree', tree, ...(parent ? ['-p', parent] : []), '-m', message);
    git('update-ref', 'refs/heads/public', commit);
    console.log(`public → ${commit.slice(0, 7)}`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
