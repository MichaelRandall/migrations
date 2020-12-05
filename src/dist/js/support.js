export const migrationColorCode = status => {
  let borderLeft = "solid red 3px";
  if (status === "Complete") borderLeft = "solid green 3px";
  if (status === "In-Progress") borderLeft = "solid yellow 3px";
  if (status === "Stuck") borderLeft = "solid red 3px";

  return borderLeft;
};
