import { FaMap } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DespreCampanie = () => {
  return (
    <>
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md px-6 md:px-12 py-6 min-h-[10vh] flex flex-col md:flex-row md:items-center justify-end gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 px-6 py-2.5 rounded-full hover:bg-surface-container-low transition-colors shadow-sm"
        >
          <FaMap className="text-yellow-500" size="16" />
          <span className="font-label font-bold text-sm text-primary">
            Inapoi la harta
          </span>
        </Link>
      </div>
      <section className="px-6 md:px-12 py-4 flex-1 bg-surface-container-low rounded-xl">
        <div className="w-full overflow-hidden relative">
          <p className="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            interdum non lectus in fermentum. Praesent orci nibh, auctor sed
            tempor quis, eleifend dapibus tellus. Sed a condimentum arcu. Cras
            non fringilla orci, ac eleifend odio. Curabitur cursus turpis id
            velit suscipit, et semper purus scelerisque. Maecenas nec
            sollicitudin turpis, dapibus finibus lectus. Mauris ac euismod
            ipsum. Vestibulum imperdiet, mi a fermentum rutrum, augue dui mattis
            erat, et interdum ligula nibh in ante. Vivamus ut vehicula ante. Sed
            a ornare tortor.
          </p>
          <p className="py-2">
            Etiam ac ultrices neque, in tincidunt nisi. Cras vitae mollis mi.
            Etiam in felis facilisis ligula posuere tincidunt vel sit amet
            purus. Vivamus tempor risus purus, ut lacinia tellus commodo eu.
            Nullam viverra eros quis dictum lobortis. Maecenas quis lacus ipsum.
            Curabitur dictum molestie justo, nec hendrerit lorem rutrum in.
            Pellentesque malesuada efficitur leo. Suspendisse pretium, sapien
            sed porttitor varius, ex lectus ultrices ex, sit amet faucibus sem
            turpis sed libero. Ut dignissim eleifend erat eu tempor. Phasellus
            lobortis vel leo fringilla posuere. Maecenas maximus arcu eget ex
            malesuada consequat. Cras interdum ex vitae purus blandit, et ornare
            ipsum faucibus. Aliquam nibh ipsum, consectetur in volutpat a,
            porttitor at dolor. Aenean fermentum arcu condimentum, tincidunt
            justo ut, condimentum erat. In blandit ex non velit vehicula
            placerat.
          </p>
          <p className="py-2">
            Nulla facilisi. Maecenas maximus commodo mi, sit amet posuere lacus
            tempor quis. Quisque porttitor nisi eu tincidunt fringilla. Quisque
            quis malesuada mauris, a sagittis neque. Aliquam tempor, nibh at
            pulvinar pharetra, diam felis mollis augue, tempus fermentum enim
            sapien id tellus. In efficitur risus vitae neque malesuada
            efficitur. Nunc porttitor ultrices urna ut pretium. Curabitur
            eleifend rutrum mi. Quisque tincidunt mauris dolor, non accumsan
            justo gravida id. Nunc odio urna, maximus id nulla elementum,
            ullamcorper gravida turpis. In hac habitasse platea dictumst.
            Pellentesque quis dui condimentum, congue felis vel, congue sem.
            Donec ut rhoncus odio. Nulla lobortis diam et dignissim pulvinar.
          </p>
        </div>
      </section>
    </>
  );
};
