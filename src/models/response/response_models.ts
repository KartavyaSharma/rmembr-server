import { ICourse } from "../db/planner_models/course";
import { ISection } from "../db/planner_models/sections";

/**
 * Contains all response models for rmembr.
 */

/** ========== User ========== */
/** DELETE /planner */
export interface IDeleteUserResponse {
    user: string;
    courseGroup: string;
}
/** ========================== */

/** ========== Course Group ========== */
export interface ICourseGroupResponse {
    name: string;
    courses: ICourseGroupCourseInfo[];
}

export interface ICourseGroupCourseInfo {
    _id: string;
    name: string;
}
/** =================================== */

/** ========== Auth ========== */
/** GET /create-user */
export interface ICreateUser {
    /** JWT token after creating the user. */
    token: string;
}

export interface ICreateUserResponse {
    courseGroup: ICourseGroupResponse;
    token: string;
}

/** POST /login */
export interface ILoginResponse {
    token: string;
}
/** ========================== */

/** ========== Course ========== */
/** GET / */
export interface IGetCourseListResponse {
    /** Returns course group and course list */
    courseGroup: ICourseGroupResponse
}
/** POST / */
export interface ICreateCourseResponse {
    /** Returns created course object. */
    course: ICourse;
}
/** DELETE /courses/:courseId */
export interface IDeleteCourseResponse {
    /** Returns refreshed course list w/o deleted course. */
    courses: ICourse[];
}
/** PATCH /courses/:courseId */
export interface IUpdateCourseResponse {
    /** Returns created course object. */
    course: ICourse;
}
/** ============================ */

/** ========== Section ========== */
/** POST /sections/:sectionId */
export interface ICreateSectionResponse {
    /** Returns created Section object */
    section: ISection;
}
/** DELETE /sections/:sectionId */
export interface IDeleteSectionResponse {
    /** Returns refreshed section list w/o deleted section. */
    sections: ISection[];
}
/** PATCH /sections/:sectionId */
export interface IUpdateSectionResponse {
    section: ISection;
}
/** ============================= */