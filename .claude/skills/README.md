# Prosjekt-skills

Skills som ligger her blir automatisk plukket opp av Claude Code for alle som
jobber i dette repoet — lokalt, i Cowork og i web-sesjoner. Ingen installasjon
kreves ut over å ha repoet sjekket ut.

## Innhold

Mappene under er kopiert fra [emilkowalski/skills](https://github.com/emilkowalski/skills)
(MIT, se `LICENSE`), pinnet til commit `70744e3` (2026-07-27):

| Skill | Hva den gjør |
| --- | --- |
| `emil-design-eng` | Hovedskillen: UI-polish, komponentdesign og animasjonsvalg |
| `apple-design` | Apples prinsipper for grensesnitt og fysisk bevegelse, oversatt til web |
| `animation-vocabulary` | Slår opp riktig fagterm for en bevegelse du bare kan beskrive |
| `find-animation-opportunities` | Finner steder i UI-et som burde animeres — og hva som ikke bør det |
| `improve-animations` | Auditerer all animasjon i kodebasen og lager prioriterte planer |
| `review-animations` | Streng review av animasjonskode (kalles eksplisitt) |
| `pick-ui-library` | Velger riktig frontend-bibliotek for oppgaven (kalles eksplisitt) |
| `prototype` | Bygger flere varianter av en UI-bit bak en visuell velger (kalles eksplisitt) |

`review-animations`, `pick-ui-library` og `prototype` har
`disable-model-invocation: true` og kjører bare når du ber om dem ved navn,
f.eks. `/review-animations`.

## Oppdatere

```bash
git clone --depth 1 https://github.com/emilkowalski/skills.git /tmp/emilskills
rm -rf .claude/skills/{animation-vocabulary,apple-design,emil-design-eng,find-animation-opportunities,improve-animations,pick-ui-library,prototype,review-animations}
cp -r /tmp/emilskills/skills/* .claude/skills/
cp /tmp/emilskills/LICENSE .claude/skills/LICENSE
```

Oppdater deretter commit-referansen over.

Alternativt kan du installere dem for din egen bruker (utenfor repoet) med
`npx skills@latest add emilkowalski/skills` — da havner de i `~/.claude/skills/`
og gjelder alle prosjektene dine, men følger ikke med repoet.
