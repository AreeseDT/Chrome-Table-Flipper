
default:
	cp ./src/* ./dist/table-flipper
	zip ./dist/table-flipper.zip ./dist/table-flipper/*

clean:
	rm ./dist/table-flipper/*
	rm ./dist/table-flipper.zip