import React from 'react';

interface AppLayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ header, footer, children }) => {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="hidden flex-none bg-gray-800 text-white p-4 lg:w-1/5 lg:h-full lg:flex lg:items-center lg:justify-center">
        {header}
      </div>
      <main className="flex-grow overflow-y-auto bg-gray-100 lg:w-3/5 lg:h-full">{children}</main>
      <div className=" hidden flex-none bg-gray-800 text-white p-4 lg:w-1/5 lg:h-full lg:flex lg:items-center lg:justify-center">
        {footer}
      </div>
    </div>
  );
};

export default AppLayout;
