import {connect} from "@/db/db";
import SubCategory from "@/models/subcatagory.model";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function GET(req:NextRequest, res: NextResponse){
    try {
        const subCatagory = await SubCategory.find({parent:req.nextUrl.searchParams.get("parent")})

        const response = NextResponse.json({
            message: "get catagory successful",
            success: true,
            data:subCatagory
        })
      
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json()
        const {name, description,parent} = reqBody;
        console.log(reqBody);

        const newCategory = await SubCategory.create({
            name,description,parent
        })

        const response = NextResponse.json({
            message: "create sub catagory successful",
            success: true,
            data:newCategory
        })
      
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


