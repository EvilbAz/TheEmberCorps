from pathlib import Path

path = Path('rules/equipment.md')
text = path.read_text(encoding='utf-8')

replacements = {
    "Cost: 10,000 Ryō. \\[Small, One-Handed, Launcher, Kunai, Projectile\\]. Speed 8; Stamina 8; Accuracy \\+0; Range 15 \\+ STR/4; Delay 1; Capacity 3; Reload 5; Durability 30\\.": "Cost: 10,000 Ryō. \\[Small, One-Handed, Launcher, Kunai, Projectile\\]. Speed 8; Stamina 8; Accuracy \\+0; Range 15; Delay 1; Capacity 3; Volley Limit 3; Reload 5; Durability 30\\.",
    "Cost: 18,000 Ryō. \\[Medium, Two-Handed, Launcher, Kunai, Projectile\\]. Speed 10; Stamina 10; Accuracy \\+1; Range 20 \\+ STR/4; Delay 1; Capacity 6; Reload 6; Durability 40\\.": "Cost: 18,000 Ryō. \\[Medium, Two-Handed, Launcher, Kunai, Projectile\\]. Speed 10; Stamina 10; Accuracy \\+1; Range 25; Delay 1; Capacity 6; Volley Limit 5; Reload 6; Durability 40\\.",
    "Cost: 18,000 Ryō. \\[Medium, Two-Handed, Launcher, Shuriken, Projectile\\]. Speed 8; Stamina 9; Accuracy \\-1; Range 20 \\+ STR/4; Delay 1; Capacity 8; Reload 6; Durability 40\\.": "Cost: 18,000 Ryō. \\[Medium, Two-Handed, Launcher, Shuriken, Projectile\\]. Speed 8; Stamina 9; Accuracy \\-1; Range 25; Delay 1; Capacity 8; Volley Limit 6; Reload 6; Durability 40\\.",
    "Cost: 26,000 Ryō. \\[Large, Two-Handed, Launcher, Shuriken, Projectile\\]. Speed 12; Stamina 15; Accuracy \\-2; Range 25 \\+ STR/4; Delay 2; Capacity 8; Reload 7; Durability 55\\.": "Cost: 26,000 Ryō. \\[Large, Two-Handed, Launcher, Shuriken, Projectile\\]. Speed 12; Stamina 15; Accuracy \\-2; Range 35; Delay 2; Capacity 8; Volley Limit 4; Reload 7; Durability 55\\.",
    "Choose 2 to 4 loaded compatible projectiles of the same projectile type. You cannot fire more projectiles than your remaining Capacity, your DEX/10, or 4\\.": "Choose at least 2 loaded compatible projectiles of the same projectile type, up to the weapon's Volley Limit. You cannot fire more projectiles than your remaining Capacity. Volley Limit is determined by the Launcher frame and may be modified by Components.",
    "The Attack uses the Launcher's Base Speed, then increases its Speed by \\+1 for each projectile after the first. Increase Stamina by \\+1 for every 2 projectiles fired, rounded up.": "The Attack uses the Launcher's Base Speed. Increase Final Speed by \\+1 for every 2 projectiles fired beyond the first 2, rounded up. Increase Stamina by \\+1 for every 2 projectiles fired, rounded up.",
    "**Expanded Magazine — 2 AP/Rank.** Launcher only. Increase Capacity by 2 per Rank. Maximum 3 Ranks.": "**Expanded Magazine — 2 AP/Rank.** Launcher only. Increase Capacity by 2 per Rank. Maximum 3 Ranks. Capacity does not increase Volley Limit unless another effect explicitly says it does.",
    "**Rapid Index — 4 AP.** Requires Volley. Reduce the additional Speed imposed by Volley by 1, minimum 0\\.": "**Rapid Index — 4 AP.** Requires Volley. Ignore the first \\+1 Final Speed increase imposed by Volley. This cannot reduce the Attack below the Launcher's normal Base Speed.",
}

for old, new in replacements.items():
    if old in text:
        text = text.replace(old, new)
    elif new not in text:
        raise SystemExit('Missing expected text: ' + old)

anchor = "A Launcher supplies an attack's Speed, Stamina, Accuracy, Range, and Delay. The loaded projectile supplies Damage Dice, Damage Type, and projectile-specific effects. A launched Kunai or Shuriken does not also use its printed thrown Speed, Stamina, Range, or Delay."
addition = anchor + "\n\nLauncher Range is provided by the mechanism and does not scale with STR unless a specific frame or effect says otherwise. When making a single-projectile Called Shot through a Launcher, reduce the Called Shot's Accuracy penalty by 1. This does not apply to Volley."
if addition not in text:
    if anchor not in text:
        raise SystemExit('Missing launcher rules anchor')
    text = text.replace(anchor, addition, 1)

start = text.index('##### Kunai Launchers\n{:#kunai-launchers-2}')
end = text.index('##### Ready-Made Kunai and Shuriken', start)
prefix, section, suffix = text[:start], text[start:end], text[end:]
section = section.replace("Range 15 \\+ STR/4; Delay 1; Capacity 3; Reload 5; Durability 30\\.", "Range 15; Delay 1; Capacity 3; Volley Limit 3; Reload 5; Durability 30\\.")
section = section.replace("Range 15 \\+ STR/4; Delay 1; Capacity 5; Reload 5; Durability 30\\.", "Range 15; Delay 1; Capacity 5; Volley Limit 3; Reload 5; Durability 30\\.")
section = section.replace("Range 25 \\+ STR/4; Delay 1; Capacity 6; Reload 6; Durability 40\\.", "Range 30; Delay 1; Capacity 6; Volley Limit 5; Reload 6; Durability 40\\.")
section = section.replace("Range 20 \\+ STR/4; Delay 1; Capacity 10; Reload 6; Durability 40\\.", "Range 25; Delay 1; Capacity 10; Volley Limit 5; Reload 6; Durability 40\\.", 1)
section = section.replace("Range 20 \\+ STR/4; Delay 1; Capacity 8; Reload 6; Durability 40\\.", "Range 25; Delay 1; Capacity 8; Volley Limit 5; Reload 6; Durability 40\\.", 1)
section = section.replace("Range 20 \\+ STR/4; Delay 1; Capacity 10; Reload 6; Durability 40\\.", "Range 25; Delay 1; Capacity 10; Volley Limit 6; Reload 6; Durability 40\\.", 1)
section = section.replace("Range 20 \\+ STR/4; Delay 1; Capacity 12; Reload 6; Durability 40\\.", "Range 25; Delay 1; Capacity 12; Volley Limit 6; Reload 6; Durability 40\\.")
section = section.replace("Range 30 \\+ STR/4; Delay 1; Capacity 8; Reload 6; Durability 40\\.", "Range 35; Delay 1; Capacity 8; Volley Limit 6; Reload 6; Durability 40\\.")
section = section.replace("Range 30 \\+ STR/4; Delay 2; Capacity 12; Reload 7; Durability 55\\.", "Range 40; Delay 2; Capacity 12; Volley Limit 4; Reload 7; Durability 55\\.")
section = section.replace("Range 30 \\+ STR/4; Delay 2; Capacity 10; Reload 7; Durability 55 (+10%).", "Range 40; Delay 2; Capacity 10; Volley Limit 4; Reload 7; Durability 55 (+10%).")
section = section.replace("Reduce the additional Speed imposed by Volley by 1, minimum 0\\.", "Ignore the first \\+1 Final Speed increase imposed by Volley.")
text = prefix + section + suffix

path.write_text(text, encoding='utf-8')

# one-shot trigger
