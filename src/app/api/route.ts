import { storage } from "@/config/FirebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const storageRef = ref(storage);
    const listResult = await listAll(storageRef);
    const urls = await Promise.all(
      listResult.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      })
    );

    return new NextResponse(JSON.stringify({ photos: urls }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}