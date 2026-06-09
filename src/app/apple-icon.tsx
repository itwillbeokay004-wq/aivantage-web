import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "42px",
          background: "radial-gradient(circle at 28% 20%, rgba(34,211,238,0.86) 0, transparent 36%), radial-gradient(circle at 78% 84%, rgba(168,85,247,0.68) 0, transparent 42%), linear-gradient(135deg, #020617 0%, #07111f 58%, #1d1236 100%)",
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
            right: "42px",
            top: "39px",
            width: "18px",
            height: "18px",
            borderRadius: "999px",
            background: "#67e8f9",
            boxShadow: "0 0 30px #22d3ee",
          }}
        />
        <div
          style={{
            color: "white",
            fontSize: "104px",
            fontWeight: 850,
            letterSpacing: "-0.08em",
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
