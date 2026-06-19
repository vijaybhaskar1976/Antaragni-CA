export interface ElementTransform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  zIndex: number;
}

export type IncentivesLayoutConfig = Record<string, ElementTransform>;

export const defaultTransform: ElementTransform = {
  x: 0,
  y: 0,
  scale: 1,
  rotation: 0,
  opacity: 1,
  zIndex: 10,
};

// INITIAL DEFAULTS
export const incentivesLayout: IncentivesLayoutConfig = {
  certificate: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  pass: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  merchandise: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  opportunities: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  pedestals: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 0 },
  spotlight: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 5 },
  title: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  text_recognition: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  text_experience: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  text_growth: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  text_legacy: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  label_certificate: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  label_pass: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  label_merchandise: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
  label_opportunities: { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 10 },
};
