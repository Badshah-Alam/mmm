
import PaidFeatures from "../_components/paid-features/paid-features";

export default function About({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <div className="bg-[#f5f5f5]">
      {children}
    </div>
  );
}