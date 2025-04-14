import express from "express";
import { addCourseAnnouncement, deleteCourseAnnouncement, getCourseAnnouncements, getFacultyCourses, updateCourseAnnouncement } from "../controllers/faculty.controller.js";


const router = express.Router();

// router.get('/', getByIds);
router.get('/:id/courses', getFacultyCourses);
router.get('/courses/:courseId', getCourseAnnouncements);

router.post('/courses/:courseId/announcements', addCourseAnnouncement);
router.put('/courses/:courseId/announcements/:announcementId/update', updateCourseAnnouncement);
router.delete('/courses/:courseId/announcements/:announcementId/delete', deleteCourseAnnouncement);


export default router;