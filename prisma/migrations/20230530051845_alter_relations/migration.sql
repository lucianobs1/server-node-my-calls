-- CreateTable
CREATE TABLE "administrators" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_condos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "administrator_id" TEXT,
    CONSTRAINT "condos_administrator_id_fkey" FOREIGN KEY ("administrator_id") REFERENCES "administrators" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_condos" ("created_at", "id", "name") SELECT "created_at", "id", "name" FROM "condos";
DROP TABLE "condos";
ALTER TABLE "new_condos" RENAME TO "condos";
CREATE UNIQUE INDEX "condos_name_key" ON "condos"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
