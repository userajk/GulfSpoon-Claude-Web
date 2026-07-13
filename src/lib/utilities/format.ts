export function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes} mins`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hours} hr${hours > 1 ? "s" : ""}`;
  return `${hours} hr${hours > 1 ? "s" : ""} ${mins} min`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function scaleAmount(amount: string | undefined, scale: number): string {
  if (!amount) return "";
  const fractionMap: Record<string, number> = {
    "1/4": 0.25, "1/3": 0.333, "1/2": 0.5, "2/3": 0.667, "3/4": 0.75,
  };
  const num = fractionMap[amount] ?? parseFloat(amount);
  if (isNaN(num)) return amount;
  const scaled = num * scale;
  if (scaled === Math.floor(scaled)) return String(scaled);
  const closeFractions: [number, string][] = [
    [0.25, "1/4"], [0.333, "1/3"], [0.5, "1/2"], [0.667, "2/3"], [0.75, "3/4"],
  ];
  for (const [val, str] of closeFractions) {
    if (Math.abs(scaled - val) < 0.02) return str;
    if (Math.abs(scaled - Math.floor(scaled) - val) < 0.02 && Math.floor(scaled) > 0) {
      return `${Math.floor(scaled)} ${str}`;
    }
  }
  return scaled.toFixed(scaled < 10 ? 1 : 0).replace(/\.0$/, "");
}

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
