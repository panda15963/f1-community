"use client";

import { useState } from "react";

export interface TabItem {
    id: string;
    label: string;
}

interface TabsProps {
    items: TabItem[];
    defaultTab?: string;
    onChange?: (tabId: string) => void;
}

export default function Tabs({
                                 items,
                                 defaultTab,
                                 onChange,
                             }: TabsProps) {
    const [activeTab, setActiveTab] = useState(
        defaultTab ?? items[0]?.id
    );

    const handleChange = (tabId: string) => {
        setActiveTab(tabId);
        onChange?.(tabId);
    };

    return (
        <div className="flex gap-1 border-b border-zinc-800">
            {items.map((item) => {
                const active = item.id === activeTab;

                return (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => handleChange(item.id)}
                        className={`border-b-2 px-4 py-3 text-sm transition ${
                            active
                                ? "border-white text-white"
                                : "border-transparent text-zinc-500 hover:text-zinc-300"
                        }`}
                    >
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
}