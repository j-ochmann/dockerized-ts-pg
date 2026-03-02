#!/bin/bash

# Načtení běžných údajů
read -p "Zadejte název projektu: " project_name
read -p "Zadejte uživatelské jméno: " db_user
read -p "Zadejte název databáze: " db_name

# Skryté načtení hesla
read -sp "Zadejte heslo: " db_password
echo "" # Odřádkování po zadání hesla

# Nyní můžete proměnné použít, např.:
echo "Konfiguruji projekt $project_name pro uživatele $db_user..."
