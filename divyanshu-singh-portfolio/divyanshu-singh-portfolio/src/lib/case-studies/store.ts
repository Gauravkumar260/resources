"use client";

import { create } from "zustand";

export type CaseStudyId = "klimashift" | "autoremov" | "trivira";

interface CaseStudyState {
  openId: CaseStudyId | null;
  open: (id: CaseStudyId) => void;
  close: () => void;
}

export const useCaseStudy = create<CaseStudyState>((set) => ({
  openId: null,
  open: (id) => set({ openId: id }),
  close: () => set({ openId: null }),
}));
