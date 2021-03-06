import { Model, Schema } from "mongoose";
import { Utils } from "../../../utils/server_utils";
import { ISection, ISectionSchema } from "./sections";

/**
 * Defines properties of a course.
 */
export interface ICourse {
    _id: string;
    _courseGroupId: string;
    name: string;
    sections: ISection[];
}

/**
 * Creates a mongoose schema which creates a
 * 'course' collection in MongoDB Atlas.
 */
export const ICourseSchema = new Schema<ICourse>(
    {
        _id: { type: String, required: true },
        _courseGroupId: { type: String, required: true },
        name: { type: String, required: true },
        sections: {type: [ISectionSchema], required: false, default: null}
    }
)