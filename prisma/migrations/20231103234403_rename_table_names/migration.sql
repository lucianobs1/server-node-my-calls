/*
  Warnings:

  - You are about to drop the `Call` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Call";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "calls" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isOpen" BOOLEAN NOT NULL DEFAULT true,
    "technician_id" TEXT,
    "client_id" TEXT,
    CONSTRAINT "calls_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "technicians" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "calls_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_informations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "call_id" TEXT,
    CONSTRAINT "informations_call_id_fkey" FOREIGN KEY ("call_id") REFERENCES "calls" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_informations" ("call_id", "created_at", "description", "id") SELECT "call_id", "created_at", "description", "id" FROM "informations";
DROP TABLE "informations";
ALTER TABLE "new_informations" RENAME TO "informations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
