// we use `[ul_&]` prefix for the <UL> variety
export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li
      className={`
    my-2
    [&>p]:m-0
    [&>p]:inline
    [ul_&]:relative
    [ul_&]:pl-4
    [ul_&]:before:text-gray-400
    [ul_&]:before:content-['–']
    [ul_&]:before:mr-2
    [ul_&]:before:absolute
    [ul_&]:before:-ml-4
  `}
    >
      {children}
    </li>
  );
}
