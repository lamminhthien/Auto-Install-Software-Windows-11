@echo off
pushd
for /R %%d in (.) DO (
	cd "%%d"
	if exist *.txt (
		ren *.txt *.png
	)
)
popd