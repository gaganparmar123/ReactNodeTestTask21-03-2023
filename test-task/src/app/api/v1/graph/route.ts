import { connect } from "@/db/db";
import Product from "@/models/product.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    const catagory = await Product.aggregate([
      {
        $match: {
          parent: req.nextUrl.searchParams.get("parent"),
        },
      },
      {
        $sort: {
          saleCount: -1,
        },
      },
      {
        $limit: 10,
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
