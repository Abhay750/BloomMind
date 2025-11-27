# 🎬 DEMO LOGIN - STEP BY STEP

## Step 1️⃣: Create MySQL Database

Open terminal and run:

```bash
mysql -u root -p
```

When prompted for password, enter your MySQL root password.

Then copy & paste this entire block:

```sql
CREATE DATABASE mindbloom CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'mindbloom'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON mindbloom.* TO 'mindbloom'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Press Enter. You should see:
```
Query OK, 0 rows affected
```

## Step 2️⃣: Initialize Database Tables

Open your browser and visit:

```
http://localhost/BloomMind-main/php/init-db.php
```

You should see:
```json
{
  "success": true,
  "message": "Users table ready | Login logs table ready | Password resets table ready"
}
```

## Step 3️⃣: Create Demo User Account

Open your browser and visit:

```
http://localhost/BloomMind-main/php/create-demo-user.php
```

You should see:
```json
{
  "success": true,
  "message": "Demo user created successfully!",
  "credentials": {
    "email": "admin123@demo.com",
    "password": "admin123",
    "username": "admin123"
  }
}
```

## Step 4️⃣: Test the Login

Open your browser and visit:

```
http://localhost/BloomMind-main/log_in.html
```

You should see the login/signup form.

**Click the "Login" button**

**Enter these credentials:**
- Email: `admin123@demo.com`
- Password: `admin123`

**Click "Sign in"**

✅ **Success!** You'll be redirected to the mood tracker dashboard.

---

## Alternative: Test with Terminal (cURL)

If you prefer command line:

### Initialize Database
```bash
curl http://localhost/BloomMind-main/php/init-db.php
```

### Create Demo User
```bash
curl http://localhost/BloomMind-main/php/create-demo-user.php
```

### Test Login
```bash
curl -X POST http://localhost/BloomMind-main/php/login.php \
  -H "Content-Type: application/json" \
  -d '{"email":"admin123@demo.com","password":"admin123"}' \
  -c cookies.txt
```

Expected response:
```json
{
  "success": true,
  "token": "...",
  "user": {
    "userId": "admin-demo-user-001",
    "email": "admin123@demo.com",
    "name": "Admin Demo"
  }
}
```

### View User Profile
```bash
curl http://localhost/BloomMind-main/php/me.php -b cookies.txt
```

### Logout
```bash
curl -X POST http://localhost/BloomMind-main/php/logout.php -b cookies.txt
```

---

## 🎯 Demo Credentials

```
Username: admin123
Email: admin123@demo.com
Password: admin123
```

## 📊 What Happens When You Login

1. ✅ Credentials verified against database
2. ✅ Session created
3. ✅ Login recorded in login_logs table with:
   - Timestamp
   - IP address
   - Browser info
   - Status (SUCCESS)
4. ✅ Redirected to mood tracker
5. ✅ User ID stored in browser

## 🗄️ Database Information

**Database name:** mindbloom
**Host:** localhost
**Username:** mindbloom
**Password:** password123

**Tables created:**
- users (stores user accounts)
- login_logs (tracks login attempts)
- password_resets (for password reset functionality)

## ✅ You're All Set!

All files are in place. Just follow the 4 steps above and you can login with:

- **Email:** admin123@demo.com
- **Password:** admin123

---

## 🆘 Troubleshooting

### "Connection refused"
- Make sure MySQL is running
- Check if credentials are correct

### "Table already exists"
- This is normal and expected
- It means tables were already created

### "Demo user already exists"
- This means the user was already created
- Just proceed to login

### "Invalid credentials"
- Make sure you completed Step 3 (create demo user)
- Double-check the email and password

---

## 📁 Files in `/php/` Directory

- `config.php` - Database connection
- `init-db.php` - Create tables
- `create-demo-user.php` - Create demo user
- `register.php` - Registration endpoint
- `login.php` - Login endpoint
- `me.php` - User profile
- `login-history.php` - Login history
- `logout.php` - Logout endpoint

All files are ready to use! 🎉
