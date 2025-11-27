# ✅ DEMO LOGIN - READY TO USE

## Demo Credentials
```
Email: admin@gmail.com
Password: admin123
```

## Setup Instructions

### 1. Create MySQL Database
```bash
mysql -u root -p
```

Paste this:
```sql
CREATE DATABASE mindbloom CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'mindbloom'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON mindbloom.* TO 'mindbloom'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 2. Initialize Database
Visit: `http://localhost/BloomMind-main/php/init-db.php`

You should see:
```json
{"success": true, "message": "Database tables ready"}
```

### 3. Create Demo User
Visit: `http://localhost/BloomMind-main/php/create-demo-user.php`

You should see:
```json
{"success": true, "email": "admin@gmail.com", "password": "admin123"}
```

### 4. Login
Visit: `http://localhost/BloomMind-main/log_in.html`

Click "Login" and enter:
- **Email**: admin@gmail.com
- **Password**:     

Click "Sign in" → You'll be redirected to the mood tracker dashboard ✅

---

## What's Included

✅ Clean, simple login form with good UI
✅ PHP backend with MySQL database
✅ Demo user: admin@gmail.com / admin123
✅ User login tracking
✅ Session management
✅ Password hashing (bcrypt)
✅ Auto-redirect to mood tracker after login

## Files Created

- `/php/config.php` - Database connection
- `/php/init-db.php` - Create tables
- `/php/register.php` - Registration
- `/php/login.php` - Login with tracking
- `/php/me.php` - Get user profile
- `/php/logout.php` - Logout
- `/php/create-demo-user.php` - Create demo user

All set! Follow the 4 steps above and you're done. 🎉
