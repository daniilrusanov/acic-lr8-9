# Проєкт: Система управління маркетплейсом спортивних товарів

## Тема роботи
**24. Система управління великим маркетплейсом спортивних товарів – без онлайн-торгівлі, лише адміністрування постачальників і товарів.**

## Виконав
### Студент групи **КН-31**  
### **Русанов Данііл**

## Структура бази даних

База даних називається `SportingGoods` і складається з 6 основних таблиць:

---

### 📦 Products (Товари)

| Поле         | Тип                           | Опис                       |
|--------------|-------------------------------|----------------------------|
| idProduct    | int, AUTO_INCREMENT, PK       | Унікальний ідентифікатор   |
| Name         | varchar(25)                   | Назва товару               |
| Category     | enum('Sneakers','T-shirt','Pants','') | Категорія товару     |
| Price        | float                         | Ціна                       |
| Amount       | int                           | Кількість на складі        |
| idSupplier   | int, FK → Suppliers           | Постачальник               |
| idWarehouse  | int, FK → Warehouses          | Склад                      |

---

### 🧾 Orders (Замовлення)

| Поле       | Тип               | Опис                       |
|------------|-------------------|----------------------------|
| idOrder    | int, AUTO_INCREMENT, PK | Унікальний ідентифікатор |
| idSupplier | int, FK → Suppliers | Постачальник             |
| idProduct  | int, FK → Products  | Товар                     |
| Amount     | int               | Кількість                 |
| Status     | tinyint(1)        | Статус (наприклад, активне/виконане) |

---

### 💰 Financial_Transactions (Фінансові транзакції)

| Поле                 | Тип               | Опис                       |
|----------------------|-------------------|----------------------------|
| idFinancialTransaction | int, AUTO_INCREMENT, PK | Унікальний ID |
| idOrder              | int, FK → Orders  | Відповідне замовлення     |
| Amount               | int               | Сума                      |
| Date                 | date              | Дата                      |
| Status               | tinyint(1)        | Статус транзакції         |

---

### 🧍 Logistics (Логістика)

| Поле        | Тип               | Опис                      |
|-------------|-------------------|---------------------------|
| idLogistic  | int, AUTO_INCREMENT, PK | Унікальний ID     |
| Name        | varchar(25)       | Ім’я логіста              |
| Position    | varchar(25)       | Посада                    |
| Contacts    | varchar(50)       | Контактні дані            |
| Salary      | int               | Заробітна плата           |
| idWarehouse | int, FK → Warehouses | Склад                |

---

### 🏢 Suppliers (Постачальники)

| Поле       | Тип               | Опис                       |
|------------|-------------------|----------------------------|
| idSupplier | int, AUTO_INCREMENT, PK | Унікальний ID     |
| Name       | varchar(25)       | Назва компанії             |
| Contacts   | varchar(50)       | Контактні дані             |
| Terms      | text              | Умови співпраці            |
| Status     | tinyint(1)        | Активний/неактивний        |

---

### 🏬 Warehouses (Склади)

| Поле        | Тип               | Опис                        |
|-------------|-------------------|-----------------------------|
| idWarehouse | int, AUTO_INCREMENT, PK | Унікальний ID      |
| Location    | varchar(50)       | Місцезнаходження складу     |
| Capacity    | int               | Загальна місткість          |
| Workload    | int               | Поточне завантаження        |

---

## Зв’язки між таблицями

- `Products` → `Suppliers`, `Warehouses`
- `Orders` → `Suppliers`, `Products`
- `Financial_Transactions` → `Orders`
- `Logistics` → `Warehouses`

