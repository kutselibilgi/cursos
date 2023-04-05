using Pkg

# packages = ["HiGHS"]

# Pkg.add(packages)

Pkg.add(PackageSpec(name="JuMP", version="1.3.0"))

Pkg.add(PackageSpec(name="HiGHS", version="v1.5.0"))

using JuMP, HiGHS