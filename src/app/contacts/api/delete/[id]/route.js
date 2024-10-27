import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  try {
    const db = await connectDB();
    const contactCollection = db.collection("contacts");

    const res = await contactCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json(
      { message: "Deleted contact", response: res },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const contactCollection = db.collection("contacts");
  const UpdateDoc = await request.json();
  try {
    const resp = await contactCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          ...UpdateDoc
        },
      },
      {
        upsert: true,
      }
    );
    return Response.json({ message: "updated the booking", response: resp });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" });
  }
};

  export const GET = async (request, { params }) => {
    const db = await connectDB();
    const contactCollection = db.collection("contacts");
    try {
      const resp = await contactCollection.findOne({
        _id: new ObjectId(params.id),
      });
      return Response.json({ message: "booking found",
        data: resp });
    } catch (error) {
      return Response.json({ message: "Something Went Wrong" });
    }
  };


