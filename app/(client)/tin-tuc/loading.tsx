import { SkeletonListCard } from "@components/items/client-items/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-4 mt-12">
      <div className="grid grid-cols-5 gap-12">
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
        <SkeletonListCard isLoading={true} />
      </div>
    </div>
  );
}
