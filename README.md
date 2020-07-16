# genieacs-sim

TR-069 client simulator for GenieACS, extended to support integration of potential plugins.

To install:

    git clone https://github.com/alinadima/genieacs-sim.git
    cd genieacs-sim
    npm install

To use:

    ./genieacs-sim --help

To run with the plugin file of your choice, create a plugin Javascript file and run:
   ./genieacs-sim  -l YourPlugin.js
