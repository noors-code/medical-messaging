import express from "express";
import {
  createEditLog,
  getAllEditLogs,
  getEditLogById,
  updateEditLog,
  deleteEditLog,
} from "../controllers/editlog.con";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: EditLogs
 *   description: Operations related to edit logs
 */

/**
 * @swagger
 * /api/editlogs:
 *   post:
 *     summary: Create a new edit log
 *     tags: [EditLogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 60f6c2f9e1e3e50abc123456
 *               action:
 *                 type: string
 *                 example: Updated patient record
 *               details:
 *                 type: string
 *                 example: Changed patient’s address
 *     responses:
 *       201:
 *         description: Edit log created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", createEditLog);

/**
 * @swagger
 * /api/editlogs:
 *   get:
 *     summary: Get all edit logs
 *     tags: [EditLogs]
 *     responses:
 *       200:
 *         description: List of all edit logs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   action:
 *                     type: string
 *                   details:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 */
router.get("/", getAllEditLogs);

/**
 * @swagger
 * /api/editlogs/{id}:
 *   get:
 *     summary: Get a specific edit log by ID
 *     tags: [EditLogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the edit log
 *     responses:
 *       200:
 *         description: Edit log found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 action:
 *                   type: string
 *                 details:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Edit log not found
 */
router.get("/:id", getEditLogById);

/**
 * @swagger
 * /api/editlogs/{id}:
 *   put:
 *     summary: Update an existing edit log
 *     tags: [EditLogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the edit log
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               action:
 *                 type: string
 *                 example: Updated diagnosis
 *               details:
 *                 type: string
 *                 example: Corrected patient allergy info
 *     responses:
 *       200:
 *         description: Edit log updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Edit log not found
 */
router.put("/:id", updateEditLog);

/**
 * @swagger
 * /api/editlogs/{id}:
 *   delete:
 *     summary: Delete an edit log
 *     tags: [EditLogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the edit log
 *     responses:
 *       200:
 *         description: Edit log deleted successfully
 *       404:
 *         description: Edit log not found
 */
router.delete("/:id", deleteEditLog);

export default router;
