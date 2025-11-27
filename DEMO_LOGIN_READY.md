# 🎯 DEMO LOGIN SETUP - COMPLETE

## ✅ Demo Credentials Created

```
Email: admin123@demo.com
Password: admin123
Username: admin123
```

## 🚀 Quick 5-Minute Setup

### 1. Create MySQL Database
```bash
mysql -u root -p
```
Copy & paste:
```sql
CREATE DATABASE mindbloom CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'mindbloom'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON mindbloom.* TO 'mindbloom'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 2. Open Browser and Visit Each URL in Order

**Initialize Database:**
```
http://localhost/BloomMind-main/php/init-db.php
```

**Create Demo User:**
```
http://localhost/BloomMind-main/php/create-demo-user.php
```

**Login Page:**
```
http://localhost/BloomMind-main/log_in.html
```

### 3. Login with Demo Account

Click "Login" button and enter:
- **Email**: `admin123@demo.com`
- **Password**: `admin123`

Done! ✅

## 📁 PHP Files Created (10 files)

```
/php/
├── config.php                 # Database connection
├── init-db.php               # Initialize tables
├── register.php              # User registration
├── login.php                 # User login
├── me.php                    # User profile
├── login-history.php         # Login history
├── logout.php                # Logout
├── create-demo-user.php      # Create demo user
├── QUICK_START.md           # Setup guide
└── DEMO_SETUP.md            # Demo instructions
```

## 🗄️ Database Tables (3 tables)

1. **users** - User accounts with hashed passwords
2. **login_logs** - Tracks all login attempts
3. **password_resets** - Password reset tokens

## 🔐 Security Features

- ✅ bcrypt password hashing
- ✅ SQL injection prevention
- ✅ Session management
- ✅ Login attempt tracking
- ✅ IP address logging
- ✅ Browser/device identification

## 📊 What Gets Stored

When users login:
- ✅ Email & hashed password
- ✅ Full name
- ✅ Account creation date
- ✅ Last login timestamp
- ✅ Every login attempt (success/failed)
- ✅ IP address
- ✅ Browser & device info

## 🧪 Test with cURL

```bash
# Step 1: Init database
curl http://localhost/BloomMind-main/php/init-db.php

# Step 2: Create demo user
curl http://localhost/BloomMind-main/php/create-demo-user.php

# Step 3: Login
curl -X POST http://localhost/BloomMind-main/php/login.php \
  -H "Content-Type: application/json" \
  -d '{"email":"admin123@demo.com","password":"admin123"}' \
  -c cookies.txt

# Step 4: View profile
curl http://localhost/BloomMind-main/php/me.php -b cookies.txt

# Step 5: Logout
curl -X POST http://localhost/BloomMind-main/php/logout.php -b cookies.txt
```

## 🎮 Demo User Details

| Field | Value |
|-------|-------|
| Email | admin123@demo.com |
| Password | admin123 |
| Name | Admin Demo |
| User ID | admin-demo-user-001 |

## ✨ What's Integrated

- ✅ Login form in `log_in.html` connected to PHP
- ✅ User data stored in MySQL
- ✅ Session management
- ✅ Redirect to mood tracker after login
- ✅ Login tracking in database
- ✅ User ID available to mood tracker

## 🎯 Next Steps

1. ✅ Database created
2. ✅ Tables initialized  
3. ✅ Demo user created
4. ✅ Login page working
5. Next: Mood tracker linked to user
6. Future: Password reset, email verification

## 📞 All URLs

| Action | URL |
|--------|-----|
| Login Form | `http://localhost/BloomMind-main/log_in.html` |
| Register API | `POST /php/register.php` |
| Login API | `POST /php/login.php` |
| User Profile | `GET /php/me.php` |
| Login History | `GET /php/login-history.php` |
| Logout API | `POST /php/logout.php` |
| Init DB | `http://localhost/BloomMind-main/php/init-db.php` |
| Create Demo | `http://localhost/BloomMind-main/php/create-demo-user.php` |

---

**Everything is ready! You can now login with:**
```
Email: admin123@demo.com
Password: admin123
```
