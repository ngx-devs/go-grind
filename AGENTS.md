# Go Grind

Dev server log: `.agent/dev.log`.

Start dev server with:

```powershell
npm run dev 2>&1 | Tee-Object -FilePath .agent\dev.log
```

## Deployment

Do not run manual Vercel deployments from this repository.

Production deploys are handled automatically by Vercel after commits are pushed
to the tracked Git branch. Agents should verify the Git push and, when needed,
inspect the resulting automatic deployment status, but must not run commands
such as `vercel deploy` or `npx vercel deploy`.
