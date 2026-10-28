interface WidgetError {
  refetch: any;
  error: string;
  section: string;
}

export const WidgetError: React.FC<WidgetError> = ({
  refetch,
  error,
  section,
}) => (
  <section className="px-6 md:px-12 py-10">
    <div className="text-sm text-on-surface-variant">
      Failed to load {section}: {error}
    </div>
    <button
      className="mt-2 inline-flex items-center px-3 py-1 rounded-md bg-primary text-on-primary"
      onClick={refetch}
    >
      Retry
    </button>
  </section>
);
