import { DateFilterSection } from "@/components/features/blog/DateFilterSection";

type DateFilterPageProps = {
  params: Promise<{ segments?: string[] }>;
};

export default async function DateFilterPage({ params }: DateFilterPageProps) {
  const { segments } = await params;
  return <DateFilterSection segments={segments} />;
}

