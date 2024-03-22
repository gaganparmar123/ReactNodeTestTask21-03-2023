import { connect } from "@/db/db";
import Category from "@/models/catagory.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const catagory = await Category.aggregate([
      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "parent",
          as: "subcategories",
        },
      },
    ]);

    const response = NextResponse.json({
      message: "get catagory successful",
      success: true,
      data: catagory,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, description } = reqBody;
    console.log(reqBody);

    const newCategory = await Category.create({
      name,
      description,
    });

    const response = NextResponse.json({
      message: "create catagory successful",
      success: true,
      data: newCategory,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
