-- FinishD Waitlist Schema
-- Database: MySQL

CREATE DATABASE IF NOT EXISTS finishd_db;
USE finishd_db;

CREATE TABLE IF NOT EXISTS waitlist_emails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'invited', 'joined') DEFAULT 'pending'
);

-- Placeholder for external connection (e.g., via environment variables)
-- DB_HOST=your_host
-- DB_USER=your_user
-- DB_PASSWORD=your_password
-- DB_NAME=finishd_db
