import { connect } from "@/db/db";
import Product from "@/models/product.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const catagory = await Product.find({
      parent: req.nextUrl.searchParams.get("parent"),
    });
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
