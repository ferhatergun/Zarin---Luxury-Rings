interface EmptyStateProps {
  title: string;
  description?: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <p className="font-family-montserrat-medium text-gray-500 text-lg mb-2">{title}</p>
      {description && (
        <p className="font-family-avenir-medium text-gray-400 text-sm">{description}</p>
      )}
    </div>
  );
}
