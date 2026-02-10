import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = {
    width: 48,
    height: 48,
};
export const contentType = "image/png";

export default async function Icon() {
    const svgBuffer = await readFile(
        join(process.cwd(), "public/images/CanadaeAcademy - Favicon - 48 x 48 px.svg")
    );
    const svgDataUri = `data:image/svg+xml;base64,${svgBuffer.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svgDataUri} width={48} height={48} alt="" />
            </div>
        ),
        { ...size }
    );
}
