import React from "react";
import TestList from "../components/test-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testify app",
  description: "Best way to check your knowledge ",
};
export default function HomePage() {
  return <TestList />;
}
