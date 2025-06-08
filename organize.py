import os
import json
import shutil

# Load structure.json
with open('structure.json', 'r') as file:
    structure = json.load(file)

# Create folders and move files
for folder, files in structure.items():
    os.makedirs(folder, exist_ok=True)
    for filename in files:
        if os.path.isfile(filename):
            target_path = os.path.join(folder, filename)
            print(f"Moving: {filename} → {target_path}")
            shutil.move(filename, target_path)
        else:
            print(f"[!] File not found: {filename}")
          Add organize.py script for automatic folder structuring
      
