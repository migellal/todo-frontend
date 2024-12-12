# Projekt

Projekt zawiera frontend do aplikacji todo do której [backend znajduje się tutaj](https://github.com/migellal/todo-backend).

## [Demo video - kliknij tutaj](https://youtu.be/U58VoRQW_Es)

## Szczegóły techniczne
Aplikacja napisana w Angularze z użyciem biblioteki Material.


## Usprawnienia
Naprawienie i poprawienie testów to rzecz która zajął bym się w następnej kolejności. Kolejna rzecz to obsługa błędów http (np informacje o braku dostępu do serwera). Do tego jeśli liczba zadań byłaby długa można by pomyśleć na page'owaniem. 

# Zadanie

## Wymagania

### User Story:
Jako użytkownik, chcę mieć prostą aplikację do zarządzania zadaniami, która umożliwia dodawanie, usuwanie i przeglądanie zadań przez interfejs REST API.
### Polecenie:
Stwórz prostą aplikację do zarządzania zadaniami (to-do list) w Spring Boot, która posiada funkcje dodawania, usuwania i przeglądania zadań.
### Wymagania:
```
Backend:
POST /tasks: Dodanie nowego zadania. Zadanie ma zawierać tytuł (minimum 3 znaki).
GET /tasks: Pobieranie wszystkich zadań.
DELETE /tasks/{id}: Usuwanie zadania po ID.
```
### Struktura zadania:
```
Każde zadanie powinno zawierać:
Unikalne ID (np. generowane przy pomocy UUID).
Tytuł (title) – tekst.
Opis (description) – opcjonalny.
```
### Testy:
```
Testy jednostkowe dla logiki dodawania i usuwania zadań (np. za pomocą JUnit)
```
### Frontend
```
Utwórz prosty interfejs użytkownika (technologia dowolna):
Pole tekstowe i przycisk „Dodaj”, które pozwolą użytkownikowi dodać nowe zadanie.
Lista wyświetlająca wszystkie zadania z przyciskiem „Usuń” obok każdego zadania.
```
