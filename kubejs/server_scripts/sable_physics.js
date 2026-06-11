ServerEvents.tags("block", (event) => {
  const end_stones = [
    "#betterend:overgrown_end_stone",
    "minecraft:end_stone_brick_wall",
    "betterend:endstone_dust",
    "betterend:end_stone_stairs",
    "betterend:end_stone_wall",
    "betterend:end_stone_brick_cracked",
    "betterend:end_stone_brick_cracked_stairs",
    "betterend:end_stone_brick_cracked_wall",
    "betterend:end_stone_brick_weathered",
    "betterend:end_stone_brick_weathered_stairs",
    "betterend:end_stone_brick_weathered_wall",
  ];

  end_stones.forEach((block) => {
    event.add("sable:end_stones", block);
  });

  const end_stone_slabs = [
    "minecraft:end_stone_brick_slab",
    "betterend:end_stone_slab",
    "betterend:end_stone_brick_cracked_slab",
    "betterend:end_stone_brick_weathered_slab",
  ];

  end_stone_slabs.forEach((block) => {
    event.add("sable:end_stone_slabs", block);
  });

  const fragile = [
    "#deep_aether:squash",
    "betterend:cave_pumpkin",
    "betterend:aurora_crystal",
    "betterend:emerald_ice",
  ];

  fragile.forEach((block) => {
    event.add("sable:fragile", block);
  });

  const super_light = [
    "#aether:aerogel",
    "#bits_n_bobs:nixie_boards",
    "toms_storage:inventory_cable",
    "toms_storage:inventory_cable_framed",
    "toms_storage:inventory_cable_connector",
    "toms_storage:inventory_cable_connector_framed",
    "computercraft:cable",
    "computercraft:wireless_modem_normal",
    "computercraft:wireless_modem_advanced",
  ];
  super_light.forEach((block) => {
    event.add("sable:super_light", block);
  });
  event.remove("sable:super_light", "aether:aerogel_slab");

  const light = [
    "betterend:neon_cactus",
    "betterend:neon_cactus_block",
    "toms_storage:storage_terminal",
    "toms_storage:crafting_terminal",

    // Aeronautics
    "aeronautics:wooden_propeller",

    // Aeronautics utility joints/hinges
    "aeronautics_utility_objects:brass_universal_joint",
    "aeronautics_utility_objects:damping_stress_bearing",
    "aeronautics_utility_objects:hydraulic_connection_head",
    "aeronautics_utility_objects:hydraulic_hinge_head",
    "aeronautics_utility_objects:hydraulic_hinge_link",
    "aeronautics_utility_objects:hydraulic_regulator",
    "aeronautics_utility_objects:universal_joint",

    // Aeroworks controls
    "aeroworks:gyroscope",
    "aeroworks:joystick",
    "aeroworks:mechanical_servo",
    "aeroworks:stepper_servo",

    // Create Radar
    "create_radar:auto_pitch_controller",
    "create_radar:auto_yaw_controller",
    "create_radar:creative_radar_plate",
    "create_radar:data_link",
    "create_radar:fire_controller",
    "create_radar:identification_transponder",
    "create_radar:monitor",
    "create_radar:network_filterer",
    "create_radar:plane_radar",
    "create_radar:radar_bearing",
    "create_radar:radar_dish_block",
    "create_radar:radar_plate_block",
    "create_radar:radar_receiver_block",
    "create_radar:radar_warning_receiver",

    "create_tweaked_controllers:tweaked_lectern_controller",

    // Create New Age small electricals
    "create_new_age:basic_motor",
    "create_new_age:basic_motor_extension",
    "create_new_age:advanced_motor",
    "create_new_age:advanced_motor_extension",
    "create_new_age:reinforced_motor",
    "create_new_age:electrical_connector",
    "create_new_age:generator_coil",
    "create_new_age:carbon_brushes",
    "create_new_age:heat_pipe",
    "create_new_age:basic_solar_heating_plate",
    "create_new_age:advanced_solar_heating_plate",
    "create_new_age:reactor_glass",

    // Create Addition
    "createaddition:alternator",
    "createaddition:electric_motor",
    "createaddition:tesla_coil",
    "createaddition:modular_accumulator",
    "createaddition:portable_energy_interface",
    "createaddition:redstone_relay",
    "createaddition:rolling_mill",
    "createaddition:digital_adapter",
    "createaddition:connector",
    "createaddition:large_connector",

    // Create Connected mechanisms
    "create_connected:brake",
    "create_connected:centrifugal_clutch",
    "create_connected:freewheel_clutch",
    "create_connected:inverted_clutch",
    "create_connected:overstress_clutch",
    "create_connected:inverted_gearshift",
    "create_connected:brass_gearbox",
    "create_connected:parallel_gearbox",
    "create_connected:six_way_gearbox",
    "create_connected:encased_chain_cogwheel",
    "create_connected:crank_wheel",
    "create_connected:large_crank_wheel",
    "create_connected:andesite_encased_cross_connector",
    "create_connected:brass_encased_cross_connector",
    "create_connected:cross_connector",
    "create_connected:shear_pin",
    "create_connected:dashboard",
    "create_connected:inventory_access_port",
    "create_connected:inventory_bridge",
    "create_connected:kinetic_battery",
    "create_connected:kinetic_bridge",
    "create_connected:kinetic_bridge_destination",
    "create_connected:sequenced_pulse_generator",
    "create_connected:item_silo",

    // Create Connected fan catalysts
    "create_connected:empty_fan_catalyst",
    "create_connected:fan_blasting_catalyst",
    "create_connected:fan_chocolate_coating_catalyst",
    "create_connected:fan_ending_catalyst_dragon_head",
    "create_connected:fan_ending_catalyst_dragons_breath",
    "create_connected:fan_enriched_catalyst",
    "create_connected:fan_exploding_catalyst",
    "create_connected:fan_freezing_catalyst",
    "create_connected:fan_glooming_catalyst",
    "create_connected:fan_haunting_catalyst",
    "create_connected:fan_honey_coating_catalyst",
    "create_connected:fan_purifying_catalyst",
    "create_connected:fan_resonance_catalyst",
    "create_connected:fan_sanding_catalyst",
    "create_connected:fan_sculking_catalyst",
    "create_connected:fan_seething_catalyst",
    "create_connected:fan_smoking_catalyst",
    "create_connected:fan_soul_stripping_catalyst",
    "create_connected:fan_splashing_catalyst",
    "create_connected:fan_transmutation_catalyst",
    "create_connected:fan_withering_catalyst",

    // Create Delivery Required
    "createdeliveryrequired:admin_market",
    "createdeliveryrequired:contractor",
    "createdeliveryrequired:market",
    "createdeliveryrequired:p2p_link",
    "createdeliveryrequired:p2p_terminal",

    // CCC Bridge
    "cccbridge:animatronic_block",
    "cccbridge:redrouter_block",
    "cccbridge:scroller_block",
    "cccbridge:source_block",
    "cccbridge:target_block",

    "cccredstonelink:redstone_link_bridge",

    "analogaudio:cassette_deck",
    "analogaudio:radio",

    // Ecliptic Seasons climate
    "eclipticseasons:autumn_greenhouse_core",
    "eclipticseasons:spring_greenhouse_core",
    "eclipticseasons:summer_greenhouse_core",
    "eclipticseasons:winter_greenhouse_core",
    "eclipticseasons:greenhouse_core_container",
    "eclipticseasons:calendar",
    "eclipticseasons:dehumidifier",
    "eclipticseasons:humidity_tank",
    "eclipticseasons:hygrometer",
    "eclipticseasons:ice_cauldron",
    "eclipticseasons:snow_cauldron",

    // Tom's Storage
    "toms_storage:filing_cabinet",
    "toms_storage:inventory_connector",
    "toms_storage:inventory_interface",
    "toms_storage:inventory_proxy",
    "toms_storage:level_emitter",
    "toms_storage:painted_trim",
    "toms_storage:trim",
    "toms_storage:open_crate",

    // Tom's Peripherals
    "toms_peripherals:keyboard",
    "toms_peripherals:keyboard_dongle",
    "toms_peripherals:redstone_port",
    "toms_peripherals:wdt",

    // KubeJS TVs
    "kubejs:open_television",
    "kubejs:television_housing",

    "moonlight:spawn_box",
    "tracks:track_mount",
    "ldlib2:renderer_block",
    "comforts:rope_and_nail",

    // Bits n Bobs chains + lamps
    "bits_n_bobs:brass_lamp",
    "bits_n_bobs:lightbulb",
    "bits_n_bobs:headlamp",
    "bits_n_bobs:chain_pulley",
    "bits_n_bobs:chain_pulley_magnet",
    "bits_n_bobs:chain_rope",
    "bits_n_bobs:large_cogwheel_chain",
    "bits_n_bobs:small_cogwheel_chain",
    "bits_n_bobs:large_flanged_cogwheel",
    "bits_n_bobs:large_flanged_cogwheel_chain",
    "bits_n_bobs:small_flanged_cogwheel",
    "bits_n_bobs:small_flanged_cogwheel_chain",
    "bits_n_bobs:weathered_metal_girder_encased_shaft",

    // Wood cannon parts
    "createbigcannons:log_cannon_chamber",
    "createbigcannons:log_cannon_end",
    "createbigcannons:cannon_loader",
  ];
  light.forEach((block) => {
    event.add("sable:light", block);
  });

  // Heavy
  const heavy = [
    // Create New Age reactors
    "create_new_age:reactor_casing",
    "create_new_age:reactor_fuel_acceptor",
    "create_new_age:reactor_heat_vent",
    "create_new_age:reactor_rod",
    "create_new_age:heat_pump",
    "create_new_age:heater",
    "create_new_age:stirling_engine",
    "create_new_age:advanced_energiser",
    "create_new_age:reinforced_energiser",
    "create_new_age:basic_energiser",
    "create_new_age:solid_corium",
    "create_new_age:corium",
    "create_new_age:magnetite_block",
    "create_new_age:fluxuated_magnetite",
    "create_new_age:layered_magnet",
    "create_new_age:netherite_magnet",
    "create_new_age:redstone_magnet",
    "create_new_age:thorium_ore",

    // Create Diesel Generators
    "createdieselgenerators:diesel_engine",
    "createdieselgenerators:large_diesel_engine",
    "createdieselgenerators:huge_diesel_engine",
    "createdieselgenerators:distillation_tank",
    "createdieselgenerators:bulk_fermenter",
    "createdieselgenerators:pumpjack_bearing",
    "createdieselgenerators:pumpjack_bearing_b",
    "createdieselgenerators:pumpjack_crank",
    "createdieselgenerators:pumpjack_head",
    "createdieselgenerators:pumpjack_hole",
    "createdieselgenerators:oil_barrel",
    "createdieselgenerators:chemical_turret",
    "createdieselgenerators:canister",
    "createdieselgenerators:burner",

    "vista:television",
    "vista:viewfinder",

    // Numismatics
    "numismatics:bank_terminal",
    "numismatics:blaze_banker",
    "numismatics:creative_vendor",
    "numismatics:vendor",
    "numismatics:andesite_depositor",
    "numismatics:brass_depositor",

    "gravestone:gravestone",

    // Brewin' and Chewin' vessels
    "brewinandchewin:keg",
    "brewinandchewin:heating_cask",
    "brewinandchewin:fiery_fondue_pot",
    "brewinandchewin:ice_crate",

    // Waystones
    "waystones:waystone",
    "waystones:mossy_waystone",
    "waystones:sandy_waystone",
    "waystones:blackstone_waystone",
    "waystones:end_stone_waystone",
    "waystones:deepslate_waystone",
    "waystones:warp_plate",
  ];
  heavy.forEach((block) => {
    event.add("sable:heavy", block);
  });

  // Super heavy
  const super_heavy = [
    "bits_n_bobs:flywheel_bearing",

    // Create Deco coinstacks
    "createdeco:gold_coinstack",
    "createdeco:iron_coinstack",
    "createdeco:zinc_coinstack",
    "createdeco:brass_coinstack",
    "createdeco:copper_coinstack",
    "createdeco:industrial_iron_coinstack",
    "createdeco:netherite_coinstack",

    // Create Deco hulls
    "createdeco:andesite_hull",
    "createdeco:brass_hull",
    "createdeco:copper_hull",
    "createdeco:industrial_iron_hull",
    "createdeco:iron_hull",
    "createdeco:zinc_hull",

    // Bronze cannons
    "createbigcannons:bronze_autocannon_barrel",
    "createbigcannons:bronze_autocannon_breech",
    "createbigcannons:bronze_autocannon_recoil_spring",
    "createbigcannons:bronze_cannon_barrel",
    "createbigcannons:bronze_cannon_chamber",
    "createbigcannons:bronze_cannon_end",
    "createbigcannons:bronze_quickfiring_breech",
    "createbigcannons:bronze_sliding_breech",
    "createbigcannons:unbored_bronze_autocannon_barrel",
    "createbigcannons:unbored_bronze_autocannon_breech",
    "createbigcannons:unbored_bronze_autocannon_recoil_spring",
    "createbigcannons:unbored_bronze_cannon_barrel",
    "createbigcannons:unbored_bronze_cannon_chamber",
    "createbigcannons:unbored_bronze_sliding_breech",
    "createbigcannons:incomplete_bronze_autocannon_breech",
    "createbigcannons:incomplete_bronze_autocannon_recoil_spring",
    "createbigcannons:incomplete_bronze_sliding_breech",

    // Cast iron cannons
    "createbigcannons:cast_iron_autocannon_barrel",
    "createbigcannons:cast_iron_autocannon_breech",
    "createbigcannons:cast_iron_autocannon_recoil_spring",
    "createbigcannons:cast_iron_cannon_barrel",
    "createbigcannons:cast_iron_cannon_chamber",
    "createbigcannons:cast_iron_cannon_end",
    "createbigcannons:cast_iron_quickfiring_breech",
    "createbigcannons:cast_iron_sliding_breech",
    "createbigcannons:unbored_cast_iron_autocannon_barrel",
    "createbigcannons:unbored_cast_iron_autocannon_breech",
    "createbigcannons:unbored_cast_iron_autocannon_recoil_spring",
    "createbigcannons:unbored_cast_iron_cannon_barrel",
    "createbigcannons:unbored_cast_iron_cannon_chamber",
    "createbigcannons:unbored_cast_iron_sliding_breech",
    "createbigcannons:incomplete_cast_iron_autocannon_breech",
    "createbigcannons:incomplete_cast_iron_autocannon_recoil_spring",
    "createbigcannons:incomplete_cast_iron_sliding_breech",

    // Steel cannons
    "createbigcannons:steel_autocannon_barrel",
    "createbigcannons:steel_autocannon_breech",
    "createbigcannons:steel_autocannon_recoil_spring",
    "createbigcannons:steel_cannon_barrel",
    "createbigcannons:steel_cannon_chamber",
    "createbigcannons:steel_quickfiring_breech",
    "createbigcannons:steel_screw_breech",
    "createbigcannons:steel_sliding_breech",
    "createbigcannons:thick_steel_cannon_chamber",
    "createbigcannons:unbored_steel_autocannon_barrel",
    "createbigcannons:unbored_steel_autocannon_breech",
    "createbigcannons:unbored_steel_autocannon_recoil_spring",
    "createbigcannons:unbored_steel_screw_breech",
    "createbigcannons:unbored_steel_sliding_breech",
    "createbigcannons:incomplete_steel_autocannon_breech",
    "createbigcannons:incomplete_steel_autocannon_recoil_spring",
    "createbigcannons:incomplete_steel_screw_breech",
    "createbigcannons:incomplete_steel_sliding_breech",
    "createbigcannons:built_up_steel_cannon_barrel",
    "createbigcannons:built_up_steel_cannon_chamber",
    "createbigcannons:large_steel_cannon_layer",
    "createbigcannons:medium_steel_cannon_layer",
    "createbigcannons:small_steel_cannon_layer",
    "createbigcannons:very_large_steel_cannon_layer",
    "createbigcannons:very_small_steel_cannon_layer",
    "createbigcannons:unbored_large_steel_cannon_layer",
    "createbigcannons:unbored_medium_steel_cannon_layer",
    "createbigcannons:unbored_small_steel_cannon_layer",
    "createbigcannons:unbored_very_large_steel_cannon_layer",
    "createbigcannons:unbored_very_small_steel_cannon_layer",

    // Nethersteel cannons
    "createbigcannons:nethersteel_cannon_barrel",
    "createbigcannons:nethersteel_cannon_chamber",
    "createbigcannons:nethersteel_screw_breech",
    "createbigcannons:thick_nethersteel_cannon_chamber",
    "createbigcannons:built_up_nethersteel_cannon_barrel",
    "createbigcannons:built_up_nethersteel_cannon_chamber",
    "createbigcannons:large_nethersteel_cannon_layer",
    "createbigcannons:medium_nethersteel_cannon_layer",
    "createbigcannons:small_nethersteel_cannon_layer",
    "createbigcannons:very_large_nethersteel_cannon_layer",
    "createbigcannons:very_small_nethersteel_cannon_layer",
    "createbigcannons:unbored_nethersteel_screw_breech",
    "createbigcannons:unbored_large_nethersteel_cannon_layer",
    "createbigcannons:unbored_medium_nethersteel_cannon_layer",
    "createbigcannons:unbored_small_nethersteel_cannon_layer",
    "createbigcannons:unbored_very_large_nethersteel_cannon_layer",
    "createbigcannons:unbored_very_small_nethersteel_cannon_layer",
    "createbigcannons:incomplete_nethersteel_screw_breech",

    // Wrought iron cannons
    "createbigcannons:wrought_iron_cannon_chamber",
    "createbigcannons:wrought_iron_cannon_end",
    "createbigcannons:wrought_iron_drop_mortar_end",

    // Cannon cast moulds
    "createbigcannons:autocannon_barrel_cast_mould",
    "createbigcannons:autocannon_breech_cast_mould",
    "createbigcannons:autocannon_recoil_spring_cast_mould",
    "createbigcannons:cannon_end_cast_mould",
    "createbigcannons:screw_breech_cast_mould",
    "createbigcannons:sliding_breech_cast_mould",
    "createbigcannons:large_cast_mould",
    "createbigcannons:medium_cast_mould",
    "createbigcannons:small_cast_mould",
    "createbigcannons:very_large_cast_mould",
    "createbigcannons:very_small_cast_mould",
    "createbigcannons:finished_cannon_cast",
    "createbigcannons:basin_foundry_lid",
    "createbigcannons:cannon_cast",
    "createbigcannons:built_up_cannon",

    // Cannon mounts/builders/drill
    "createbigcannons:cannon_mount",
    "createbigcannons:fixed_cannon_mount",
    "createbigcannons:cannon_mount_extension",
    "createbigcannons:cannon_carriage",
    "createbigcannons:cannon_builder",
    "createbigcannons:cannon_builder_head",
    "createbigcannons:cannon_drill",
    "createbigcannons:yaw_controller",

    // Cannon projectiles
    "createbigcannons:ap_shell",
    "createbigcannons:ap_shot",
    "createbigcannons:fluid_shell",
    "createbigcannons:he_shell",
    "createbigcannons:shrapnel_shell",
    "createbigcannons:smoke_shell",
    "createbigcannons:solid_shot",
    "createbigcannons:drop_mortar_shell",
    "createbigcannons:big_cartridge",
    "createbigcannons:cannon_drill_bit",
    "createbigcannons:ram_head",
    "createbigcannons:worm_head",
    "createbigcannons:autocannon_ammo_container",
    "createbigcannons:creative_autocannon_ammo_container",
    "createbigcannons:bag_of_grapeshot",
    "createbigcannons:mortar_stone_projectile",

    "aeronautics:mounted_potato_cannon",
  ];
  super_heavy.forEach((block) => {
    event.add("sable:super_heavy", block);
  });

  // Super light
  const super_light_extras = [
    // Cannon powder + traffic cone
    "createbigcannons:powder_charge",
    "createbigcannons:traffic_cone",

    // Bits n Bobs girders
    "bits_n_bobs:girder_strut",
    "bits_n_bobs:weathered_girder_strut",
    "bits_n_bobs:weathered_metal_girder",

    // Tiny gates + tiny redstone
    "tinygates:and_gate_block",
    "tinygates:clock_block",
    "tinygates:counter_block",
    "tinygates:edge_detector_block",
    "tinygates:not_gate_block",
    "tinygates:or_gate_block",
    "tinygates:rs_latch_block",
    "tinygates:t_flip_flop_block",
    "tinygates:xor_gate_block",
    "tinyredstone:block_chopper",
    "tinyredstone:redstone_panel",

    // Advanced Peripherals
    "advancedperipherals:block_reader",
    "advancedperipherals:chat_box",
    "advancedperipherals:colony_integrator",
    "advancedperipherals:energy_detector",
    "advancedperipherals:environment_detector",
    "advancedperipherals:geo_scanner",
    "advancedperipherals:inventory_manager",
    "advancedperipherals:me_bridge",
    "advancedperipherals:nbt_storage",
    "advancedperipherals:player_detector",
    "advancedperipherals:rs_bridge",

    "toms_peripherals:gpu",
    "toms_peripherals:monitor",

    // ComputerCraft
    "computercraft:wired_modem_full",
    "computercraft:redstone_relay",
    "computercraft:disk_drive",
    "computercraft:lectern",
    "computercraft:monitor_normal",
    "computercraft:monitor_advanced",
    "computercraft:printer",
    "computercraft:speaker",
    "computercraft:computer_normal",
    "computercraft:computer_advanced",
    "computercraft:turtle_normal",
    "computercraft:turtle_advanced",

    "createaddition:barbed_wire",

    "farmersdelight:canvas_rug",
    "farmersdelight:tatami",
    "farmersdelight:half_tatami_mat",
    "farmersdelight:full_tatami_mat",
    "farmersdelight:bamboo_basket",
    "farmersdelight:wooden_basket",
    "farmersdelight:safety_net",
    "farmersdelight:rope",
    "farmersdelight:rope_fence",
    "farmersdelight:rope_fence_gate",
    "farmersdelight:tomatoes_on_rope",
    "farmersdelight:budding_tomatoes",
    "farmersdelight:tomatoes",
    "farmersdelight:cabbages",
    "farmersdelight:onions",
    "farmersdelight:rice_panicles",
    "farmersdelight:rice",

    // Veggies Delight crops
    "veggiesdelight:bellpepper_crop",
    "veggiesdelight:broccoli_crop",
    "veggiesdelight:cauliflower_crop",
    "veggiesdelight:garlic_crop",
    "veggiesdelight:sweet_potato_crop",
    "veggiesdelight:turnip_crop",
    "veggiesdelight:zucchini_crop",
    "veggiesdelight:mature_dandelion",
    "veggiesdelight:wild_bellpeppers",
    "veggiesdelight:wild_broccoli",
    "veggiesdelight:wild_cauliflowers",
    "veggiesdelight:wild_garlic",
    "veggiesdelight:wild_sweet_potatoes",
    "veggiesdelight:wild_turnips",
    "veggiesdelight:wild_zucchinis",

    // Corn Delight crops
    "corn_delight:corn_crop",
    "corn_delight:wild_corn",

    // Aether's Delight crops
    "aethersdelight:ginger_crop",
    "aethersdelight:leek_crop",
    "aethersdelight:parsnip_crop",
    "aethersdelight:wild_ginger",
    "aethersdelight:wild_leek",
    "aethersdelight:wild_parsnip",
    "aethersdelight:peppermint_bush",
    "aethersdelight:peppermint_bush_stem",

    // Ecliptic Seasons decoration
    "eclipticseasons:bamboo_wind_chimes",
    "eclipticseasons:paper_wind_chimes",
    "eclipticseasons:wind_chimes",
    "eclipticseasons:pinwheel_blue",
    "eclipticseasons:pinwheel_lime",
    "eclipticseasons:pinwheel_orange",
    "eclipticseasons:season_quest_ceiling_hanging_sign",
    "eclipticseasons:season_quest_wall_hanging_sign",
    "eclipticseasons:snowy_leaves",
    "eclipticseasons:snowy_vine",
    "eclipticseasons:block_in_copper_grate_block",
    "eclipticseasons:block_in_exposed_copper_grate_block",
    "eclipticseasons:block_in_oxidized_copper_grate_block",
    "eclipticseasons:block_in_weathered_copper_grate_block",
    "eclipticseasons:block_in_wooden_grate_block",
    "eclipticseasons:waxed_block_in_copper_grate_block",
    "eclipticseasons:waxed_block_in_exposed_copper_grate_block",
    "eclipticseasons:waxed_block_in_oxidized_copper_grate_block",
    "eclipticseasons:waxed_block_in_weathered_copper_grate_block",
  ];
  super_light_extras.forEach((block) => {
    event.add("sable:super_light", block);
  });

  // Slippery
  const slippery = [
    "aether:quicksoil",
    "aether:quicksoil_glass",
    "aether:quicksoil_glass_pane",
  ];
  slippery.forEach((block) => {
    event.add("sable:slippery", block);
  });

  // Weightless
  const weightless = [
    "aether:blue_aercloud",
    "aether:cold_aercloud",
    "aether:golden_aercloud",
    "deep_aether:chromatic_aercloud",
    "deep_aether:rain_aercloud",
    "deep_aether:sterling_aercloud",
    "deep_aether:squall_block",
    "deep_aether:stratus_block",
    "deep_aether:aercloud_grass_block",
    "deep_aether:aercloud_roots",
    "deep_aether:aercloud_root_carpet",
    "deep_aether:blue_aercloud_mushroom_block",
    "deep_aether:pink_aercloud_mushroom_block",
    "deep_aether:aerglow_blossom_block",
  ];
  weightless.forEach((block) => {
    event.add("sable:weightless", block);
  });

  // Bouncy
  const bouncy = [
    "aether:blue_aercloud",
    "deep_aether:rain_aercloud",
    "deep_aether:chromatic_aercloud",
    "deep_aether:sterling_aercloud",
  ];
  bouncy.forEach((block) => {
    event.add("sable:bouncy", block);
  });

  // Fragile
  const fragile_extras = [
    "betterend:menger_sponge",
    "betterend:menger_sponge_wet",
    "betterend:hydralux",
    "betterend:end_lily",
    "aether:berry_bush",
    "aether:crystal_fruit_leaves",
    "aether:crystal_leaves",
    "aether:holiday_leaves",
    "aether:decorated_holiday_leaves",
    "aether:golden_oak_leaves",
    "aether:skyroot_leaves",
  ];
  fragile_extras.forEach((block) => {
    event.add("sable:fragile", block);
  });

  // Create Casing wood-encased cogwheels/shafts
  const cc_full_wood_types = [
    "acacia",
    "bamboo",
    "birch",
    "brass",
    "cherry",
    "copper",
    "crimson",
    "dark_oak",
    "jungle",
    "mangrove",
    "oak",
    "warped",
    "zinc",
  ];
  const cc_casing_prefixes = ["andesite_encased", "brass_encased"];
  cc_casing_prefixes.forEach((prefix) => {
    cc_full_wood_types.forEach((wood) => {
      event.add("sable:light", `createcasing:${prefix}_${wood}_cogwheel`);
      event.add("sable:light", `createcasing:${prefix}_${wood}_large_cogwheel`);
      event.add("sable:light", `createcasing:${prefix}_${wood}_shaft`);
    });
  });
  // andesite_encased_andesite cogwheels
  event.add("sable:light", "createcasing:andesite_encased_andesite_cogwheel");
  event.add(
    "sable:light",
    "createcasing:andesite_encased_andesite_large_cogwheel",
  );
  event.add("sable:light", "createcasing:brass_encased_andesite_cogwheel");
  event.add(
    "sable:light",
    "createcasing:brass_encased_andesite_large_cogwheel",
  );
  // Glass/mldeg/spruce encased shafts
  event.add("sable:light", "createcasing:andesite_encased_glass_shaft");
  event.add("sable:light", "createcasing:andesite_encased_mldeg_shaft");
  event.add("sable:light", "createcasing:andesite_encased_spruce_shaft");
  event.add("sable:light", "createcasing:brass_encased_spruce_shaft");

  // Bare cogwheels/shafts
  const cc_bare_wood = [
    "acacia",
    "bamboo",
    "birch",
    "brass",
    "cherry",
    "copper",
    "crimson",
    "dark_oak",
    "jungle",
    "mangrove",
    "oak",
    "warped",
    "zinc",
  ];
  cc_bare_wood.forEach((wood) => {
    event.add("sable:light", `createcasing:${wood}_cogwheel`);
    event.add("sable:light", `createcasing:${wood}_large_cogwheel`);
    event.add("sable:light", `createcasing:${wood}_shaft`);
  });
  // Andesite/spruce extras
  event.add("sable:light", "createcasing:andesite_cogwheel");
  event.add("sable:light", "createcasing:andesite_large_cogwheel");
  event.add("sable:light", "createcasing:spruce_shaft");

  // Create Casing machines
  const cc_machine_casings = [
    "brass",
    "copper",
    "creative",
    "industrial_iron",
    "railway",
    "refined_radiance",
    "shadow_steel",
    "weathered_iron",
  ];
  const cc_machine_kinds = [
    "adjustable_chain_gearshift",
    "automatic_clutch",
    "chain_conveyor",
    "clutch",
    "configurable_gearbox",
    "deployer",
    "depot",
    "encased_chain_drive",
    "encased_fan",
    "gearbox",
    "gearshift",
    "mechanical_drill",
    "mechanical_harvester",
    "mechanical_plough",
    "mechanical_roller",
    "mechanical_saw",
    "mixer",
    "portable_storage_interface",
    "press",
    "slicer",
  ];
  cc_machine_casings.forEach((casing) => {
    cc_machine_kinds.forEach((kind) => {
      event.add("sable:light", `createcasing:${casing}_${kind}`);
    });
  });
  // Encased fluid pipes
  [
    "brass",
    "creative",
    "industrial_iron",
    "railway",
    "refined_radiance",
    "shadow_steel",
    "weathered_iron",
    "andesite",
  ].forEach((c) => {
    event.add("sable:light", `createcasing:${c}_encased_fluid_pipe`);
  });
  // Andesite createcasing machines
  ["automatic_clutch", "configurable_gearbox"].forEach((kind) => {
    event.add("sable:light", `createcasing:andesite_${kind}`);
  });

  // Create Prism glass casings + encased rotary parts + scaffolding
  const cp_metals_with_encased = ["andesite", "brass", "train"];
  const cp_glass_types = ["clear_glass", "glass", "illumination"];
  ["andesite", "brass", "copper", "train"].forEach((metal) => {
    cp_glass_types.forEach((glass) => {
      event.add("sable:light", `createprism:${metal}_${glass}_casing`);
    });
  });
  cp_metals_with_encased.forEach((metal) => {
    cp_glass_types.forEach((glass) => {
      event.add(
        "sable:light",
        `createprism:${metal}_${glass}_encased_cogwheel`,
      );
      event.add(
        "sable:light",
        `createprism:${metal}_${glass}_encased_large_cogwheel`,
      );
      event.add("sable:light", `createprism:${metal}_${glass}_encased_shaft`);
    });
  });
  ["andesite", "brass", "copper"].forEach((metal) => {
    event.add("sable:light", `createprism:${metal}_clear_glass_scaffolding`);
    event.add("sable:light", `createprism:${metal}_glass_scaffolding`);
  });

  // Create Deco metal frames
  const cd_metals = [
    "andesite",
    "brass",
    "copper",
    "industrial_iron",
    "iron",
    "zinc",
  ];
  const cd_super_light_universal = [
    "bars_overlay",
    "catwalk",
    "catwalk_railing",
    "catwalk_stairs",
    "mesh_fence",
    "sheet_metal",
    "support",
    "support_wedge",
    "window",
    "window_pane",
  ];
  cd_metals.forEach((metal) => {
    cd_super_light_universal.forEach((kind) => {
      event.add("sable:super_light", `createdeco:${metal}_${kind}`);
    });
  });
  // Metal bars
  ["andesite", "brass", "copper", "industrial_iron", "zinc"].forEach(
    (metal) => {
      event.add("sable:super_light", `createdeco:${metal}_bars`);
    },
  );
  // Metal doors/trapdoors
  ["andesite", "brass", "industrial_iron", "zinc"].forEach((metal) => {
    event.add("sable:super_light", `createdeco:${metal}_door`);
    event.add("sable:super_light", `createdeco:${metal}_trapdoor`);
  });
  // Metal ladders
  ["iron", "industrial_iron", "zinc"].forEach((metal) => {
    event.add("sable:super_light", `createdeco:${metal}_ladder`);
  });
  // Locked doors
  ["andesite", "brass", "copper", "industrial_iron", "zinc"].forEach(
    (metal) => {
      event.add("sable:super_light", `createdeco:locked_${metal}_door`);
    },
  );

  // Create Deco lamps
  const cd_lamp_colors = ["blue", "green", "red", "yellow"];
  const cd_lamp_metals = [
    "andesite",
    "brass",
    "copper",
    "industrial_iron",
    "iron",
    "zinc",
  ];
  cd_lamp_colors.forEach((color) => {
    cd_lamp_metals.forEach((metal) => {
      event.add("sable:light", `createdeco:${color}_${metal}_lamp`);
    });
  });

  // Create Deco decals
  const cd_decals = [
    "creeper",
    "cross",
    "down",
    "down_left",
    "down_right",
    "electrical",
    "fire",
    "fire_diamond",
    "flow",
    "fluid",
    "ice",
    "left",
    "no_entry",
    "radioactive",
    "right",
    "skull",
    "top_left",
    "top_right",
    "up",
    "warning",
  ];
  cd_decals.forEach((d) =>
    event.add("sable:super_light", `createdeco:decal_${d}`),
  );

  // Create Deco bricks
  const cd_brick_colors = [
    "blue",
    "scarlet",
    "umber",
    "dean",
    "dusk",
    "pearl",
    "verdant",
  ];
  const cd_brick_prefixes = [
    "",
    "corner_",
    "long_",
    "short_",
    "tiled_",
    "mossy_",
    "cracked_",
  ];
  cd_brick_colors.forEach((color) => {
    cd_brick_prefixes.forEach((prefix) => {
      event.add("sable:heavy", `createdeco:${prefix}${color}_bricks`);
      event.add("sable:heavy", `createdeco:${prefix}${color}_brick_slab`);
      event.add("sable:heavy", `createdeco:${prefix}${color}_brick_stairs`);
      event.add("sable:heavy", `createdeco:${prefix}${color}_brick_wall`);
    });
  });

  // Bits n Bobs chairs
  const bnb_chair_colors = [
    "amber",
    "aqua",
    "beige",
    "black",
    "blue",
    "brown",
    "coral",
    "cyan",
    "forest",
    "ginger",
    "gray",
    "green",
    "indigo",
    "light_blue",
    "light_gray",
    "lime",
    "magenta",
    "maroon",
    "mint",
    "navy",
    "olive",
    "orange",
    "pink",
    "purple",
    "red",
    "rose",
    "slate",
    "tan",
    "teal",
    "verdant",
    "white",
    "yellow",
  ];
  bnb_chair_colors.forEach((color) => {
    event.add("sable:light", `bits_n_bobs:${color}_chair`);
  });

  // Create Deco shipping containers + placards
  Color.DYE.forEach((color) => {
    event.add("sable:heavy", `createdeco:${color}_shipping_container`);
    if (color !== "white") {
      event.add("sable:super_light", `createdeco:${color}_placard`);
    }
  });

  // Comforts hammocks + sleeping bags
  Color.DYE.forEach((color) => {
    event.add("sable:super_light", `comforts:hammock_${color}`);
    event.add("sable:super_light", `comforts:sleeping_bag_${color}`);
  });

  // Vanilla signs
  event.add("sable:super_light", "#minecraft:all_signs");

  // Vanilla banners
  vanilla_dyes.forEach((color) => {
    event.add("sable:super_light", `minecraft:${color}_banner`);
    event.add("sable:super_light", `minecraft:${color}_wall_banner`);
  });

  // Dye the World canvas signs + dye_depot banners
  Color.DYE.forEach((color) => {
    if (!isVanillaDye(color)) {
      event.add("sable:super_light", `dye_the_world:${color}_canvas_sign`);
      event.add("sable:super_light", `dye_the_world:${color}_canvas_wall_sign`);
      event.add(
        "sable:super_light",
        `dye_the_world:${color}_hanging_canvas_sign`,
      );
      event.add(
        "sable:super_light",
        `dye_the_world:${color}_wall_hanging_canvas_sign`,
      );
      event.add("sable:super_light", `dye_depot:${color}_banner`);
      event.add("sable:super_light", `dye_depot:${color}_wall_banner`);
    }
  });

  // Farmers Delight canvas signs
  vanilla_dyes.forEach((color) => {
    event.add("sable:super_light", `farmersdelight:${color}_canvas_sign`);
    event.add("sable:super_light", `farmersdelight:${color}_canvas_wall_sign`);
    event.add(
      "sable:super_light",
      `farmersdelight:${color}_hanging_canvas_sign`,
    );
    event.add(
      "sable:super_light",
      `farmersdelight:${color}_wall_hanging_canvas_sign`,
    );
  });

  // Farmers Delight cabinets
  const fd_cabinet_woods = [
    "acacia",
    "bamboo",
    "birch",
    "cherry",
    "crimson",
    "dark_oak",
    "jungle",
    "mangrove",
    "oak",
    "spruce",
    "warped",
  ];
  fd_cabinet_woods.forEach((wood) => {
    event.add("sable:light", `farmersdelight:${wood}_cabinet`);
  });

  // Betterend custom tree leaves
  const be_leaves_trees = [
    "dragon_tree",
    "helix_tree",
    "lacugrove",
    "lucernia",
    "pythadendron",
    "tenanea",
  ];
  be_leaves_trees.forEach((tree) => {
    event.add("sable:fragile", `betterend:${tree}_leaves`);
  });
  // Lucernia + tenanea outer leaves
  event.add("sable:fragile", "betterend:lucernia_outer_leaves");
  event.add("sable:fragile", "betterend:tenanea_outer_leaves");
  // Umbrella tree membrane
  event.add("sable:fragile", "betterend:umbrella_tree_membrane");

  // Deep Aether tree leaves
  const da_leaf_woods = [
    "conberry",
    "cruderoot",
    "roseroot",
    "sunroot",
    "yagroot",
    "blue_roseroot",
  ];
  da_leaf_woods.forEach((wood) => {
    event.add("sable:fragile", `deep_aether:${wood}_leaves`);
  });
  event.add("sable:fragile", "deep_aether:flowering_roseroot_leaves");
  event.add("sable:fragile", "deep_aether:flowering_blue_roseroot_leaves");

  // End lotus flower parts
  const be_end_lotus_parts = ["end_lotus_flower", "end_lotus_leaf"];
  be_end_lotus_parts.forEach((p) =>
    event.add("sable:fragile", `betterend:${p}`),
  );
});
