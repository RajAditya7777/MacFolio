import { locations } from "#constants/index";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Desktop = () => {
    const constraintsRef = useRef(null);
    const { openWindow, focusWindow, windows } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleDoubleClick = (item: any) => {
        // Set the location in Finder
        setActiveLocation(item);

        // Open or focus Finder window
        if (windows.finder?.isOpen) {
            focusWindow("finder");
        } else {
            openWindow("finder");
        }
    };

    const [screenHeight, setScreenHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 800);

    useEffect(() => {
        const handleResize = () => setScreenHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Layout configuration
    const ICON_WIDTH = 96; // w-24 = 6rem
    const ICON_HEIGHT = 112; // Approx height + gap
    const START_OFFSET_X = 20;
    const START_OFFSET_Y = 60;
    const COLUMN_GAP = 10;
    const ROW_GAP = 10;

    const getPosition = (index: number) => {
        const availableHeight = screenHeight - START_OFFSET_Y * 2;
        const itemsPerColumn = Math.floor(availableHeight / (ICON_HEIGHT + ROW_GAP));
        const safeItemsPerCol = Math.max(1, itemsPerColumn);

        // Columns grow from right to left (0 is rightmost)
        const colIndex = Math.floor(index / safeItemsPerCol);
        const rowIndex = index % safeItemsPerCol;

        const right = START_OFFSET_X + colIndex * (ICON_WIDTH + COLUMN_GAP);
        const top = START_OFFSET_Y + rowIndex * (ICON_HEIGHT + ROW_GAP);

        return { right, top };
    };

    return (
        <div ref={constraintsRef} className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {locations.work.children.map((project, index) => {
                const { right, top } = getPosition(index);
                return (
                    <motion.div
                        key={project.id}
                        drag
                        dragMomentum={false}
                        dragConstraints={constraintsRef}
                        onDoubleClick={(e) => { e.stopPropagation(); handleDoubleClick(project); }}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute flex flex-col items-center gap-2 p-2 w-24 cursor-pointer hover:bg-white/20 rounded-lg transition-colors group pointer-events-auto"
                        style={{ right: right, top: top }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                        <img
                            src={project.icon}
                            alt={project.name}
                            className="w-16 h-16 object-contain drop-shadow-lg select-none pointer-events-none"
                        />
                        <span className="text-white text-xs font-semibold drop-shadow-md text-center leading-tight select-none">
                            {project.name}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default Desktop;
