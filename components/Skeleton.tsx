type SkeletonProps = {
  cards: number;
};

const Skeleton = ({ cards }: SkeletonProps) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="skeleton-container">
        <div className="skeleton-image-container">
          <div className="skeleton-image" />
        </div>
        <div className="skeleton-info">
          <h3 className="skeleton-name"></h3>
          <span className="skeleton-breed"></span>
          <div className="skeleton-button" />
        </div>
      </div>
    ));
};

export default Skeleton;
