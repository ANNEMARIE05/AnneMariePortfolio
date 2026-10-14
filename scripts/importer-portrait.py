"""Copie ta photo studio vers public/images/anne-marie-portrait.jpg

Usage (PowerShell) :
  python scripts/importer-portrait.py "C:\\chemin\\vers\\ta-photo.jpg"
"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

RACINE = Path(__file__).resolve().parents[1]
DEST = RACINE / "public" / "images" / "anne-marie-portrait.jpg"


def main() -> None:
    if len(sys.argv) < 2:
        print("Indique le chemin de ta photo en argument.", file=sys.stderr)
        sys.exit(1)
    source = Path(sys.argv[1]).expanduser()
    if not source.is_file():
        print(f"Fichier introuvable : {source}", file=sys.stderr)
        sys.exit(1)
    DEST.parent.mkdir(parents=True, exist_ok=True)
    Image.open(source).convert("RGB").save(DEST, quality=92, optimize=True)
    print(f"Portrait enregistré : {DEST}")


if __name__ == "__main__":
    main()
