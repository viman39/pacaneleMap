interface MapWrapper {
  viewBox: string;
  children: React.ReactNode;
}

export const MapWrapper: React.FC<MapWrapper> = ({ viewBox, children }) => (
  <section className="px-6 md:px-12 py-4 flex-1 bg-surface-container-low rounded-xl">
    <div className="w-full overflow-hidden relative">
      <div className="inset-0 flex justify-center">
        <svg
          id="wrapper"
          viewBox={viewBox}
          preserveAspectRatio="xMinYMin meet"
          className="lg:h-[100vh] md:h-[60vh] sm:h-[30vh]"
        >
          {children}
        </svg>
      </div>
    </div>
  </section>
);
