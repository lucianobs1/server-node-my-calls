-- CreateTable
CREATE TABLE "condos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Call" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "technician_id" TEXT,
    "condo_id" TEXT,
    CONSTRAINT "Call_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "technicians" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Call_condo_id_fkey" FOREIGN KEY ("condo_id") REFERENCES "condos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Call" ("created_at", "description", "id", "technician_id") SELECT "created_at", "description", "id", "technician_id" FROM "Call";
DROP TABLE "Call";
ALTER TABLE "new_Call" RENAME TO "Call";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "condos_name_key" ON "condos"("name");
