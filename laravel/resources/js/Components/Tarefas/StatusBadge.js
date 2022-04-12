import React from 'react';
import Badge from "@/Components/Badge.js";

export default function StatusBadge({ status = 0, className = '', children }) {

    const statusColor = (status) => {
        switch (status){
            case 0:
                return 'yellow';
            case 1:
                return 'green';
            case 2:
                return 'blue';
            default:
                return 'gray';
        }
    }

    return (
        <Badge color={statusColor(status)} className={className}>{children}</Badge>
    );
}
