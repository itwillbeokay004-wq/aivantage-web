import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "9px",
          background: "radial-gradient(circle at 28% 20%, #22d3ee 0, transparent 38%), linear-gradient(135deg, #020617 0%, #07111f 58%, #1d1236 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "5px",
            top: "5px",
            width: "5px",
            height: "5px",
            borderRadius: "999px",
            background: "#67e8f9",
            boxShadow: "0 0 10px #22d3ee",
          }}
        />
        <div
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "-0.07em",
            background: "linear-gradient(135deg, #67e8f9, #3b82f6 52%, #c4b5fd)",
            backgroundClip: "text",
          }}
        >
          A
        </div>
      </div>
    ),
    size,
  );
}
