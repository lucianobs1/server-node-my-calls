/*
  Warnings:

  - You are about to drop the column `callId` on the `informations` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_informations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "call_id" TEXT,
    CONSTRAINT "informations_call_id_fkey" FOREIGN KEY ("call_id") REFERENCES "Call" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_informations" ("created_at", "description", "id") SELECT "created_at", "description", "id" FROM "informations";
DROP TABLE "informations";
ALTER TABLE "new_informations" RENAME TO "informations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
